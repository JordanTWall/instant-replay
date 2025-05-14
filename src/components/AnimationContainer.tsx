import React, { useRef, useEffect, useState, forwardRef} from "react";
import HomeTDFrames from "./HomeTDFrames";
import AwayTDFrames from "./AwayTDFrames";
import HomeFGFrames from "./HomeFGFrames";
import AwayFGFrames from "./AwayFGFrames";
import HomeBallFrames from "./HomeBallFrames";
import AwayBallFrames from "./AwayBallFrames";
import CommentBox from "./CommentBox";

import useHomeTDAnimation from "../hooks/useHomeTDAnimation";
import useAwayTDAnimation from "../hooks/useAwayTDAnimation";
import useHomeFGAnimation from "../hooks/useHomeFGAnimation";
import useAwayFGAnimation from "../hooks/useAwayFGAnimation";
import useKickBallPosition from "../hooks/useKickBallPosition";

interface AnimationContainerProps {
  backgroundColor: string;
  textColor: string;
  playerImg: string;
  comment: string;
  logo: string;
  direction: "home" | "away";
  scoreType: "td" | "fg";
}

const AnimationContainer = forwardRef<any, AnimationContainerProps>(
  ({ backgroundColor, textColor, playerImg, comment, logo, direction, scoreType }, ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headRef = useRef<HTMLDivElement>(null);


    const [shouldKickBall, setShouldKickBall] = useState(false);
    const [showKicker, setShowKicker] = useState(true);

    const isFG = scoreType === "fg";
    const ballPos = useKickBallPosition(direction, isFG);

    let animationFrames: React.ReactElement | null = null;
    let ballFrames: React.ReactElement | null = null;

    

    useEffect(() => {
      if (!isFG) return;
      setShowKicker(true);
      const timeoutDuration = direction === "away" ? 3200 : 3000;

      const timeout = setTimeout(() => {
        setShouldKickBall(true);
      }, timeoutDuration);

      return () => clearTimeout(timeout);
    }, [isFG, direction]);

    if (scoreType === "td") {
      if (direction === "home") {
        useHomeTDAnimation(containerRef, true);
        animationFrames = <HomeTDFrames />;
      } else {
        useAwayTDAnimation(containerRef, true);
        animationFrames = <AwayTDFrames />;
      }
    } else if (scoreType === "fg") {
      if (direction === "home") {
        useHomeFGAnimation(containerRef, true);
        if (showKicker) {
          animationFrames = (
            <HomeFGFrames onRemove={() => setShowKicker(false)} headRef={headRef} />
          );
        }
      } else {
        useAwayFGAnimation(containerRef, true);
        if (showKicker) {
          animationFrames = (
            <AwayFGFrames onRemove={() => setShowKicker(false)} headRef={headRef} />
          );
        }
      }

      if (ballPos) {
        ballFrames =
          direction === "home" ? (
            <HomeBallFrames
              x={ballPos.x}
              y={ballPos.y}
              animate={shouldKickBall}
              onRemove={() => {
                setShouldKickBall(false);
              }}
            />
          ) : (
            <AwayBallFrames
              x={ballPos.x}
              y={ballPos.y}
              animate={shouldKickBall}
              onRemove={() => {
                setShouldKickBall(false);
              }}
            />
          );
      }
    }

    return (
      <div>
        <div
          ref={containerRef}
          style={{
            position: "absolute",
            top: "40%",
            width: "400px",
            height: "240px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
           
          }}
        >
          {showKicker && (
            <div
              ref={headRef}
              style={{
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                overflow: "hidden",
                backgroundColor: backgroundColor,
              }}
            >
              <img
                src={playerImg}
                alt="Player Face"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          )}

          {animationFrames}
        </div>

        <CommentBox
          backgroundColor={backgroundColor}
          textColor={textColor}
          comment={comment}
          logo={logo}
          playerImg={playerImg}
        />
        {ballFrames}
      </div>
    );
  }
);

export default AnimationContainer;
