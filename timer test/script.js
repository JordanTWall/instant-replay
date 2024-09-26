// Define the quarters
const quarters = ['First', 'Second', 'Third', 'Fourth']

let isRunning = false
let time = 0 // Time in seconds (we'll convert to minutes later)
let quarterIndex = 0 // Start with the first quarter
let timerInterval

// Get HTML elements
const timerDisplay = document.getElementById('timerDisplay')
const quarterDisplay = document.getElementById('quarter')
const timerButton = document.getElementById('timerButton')

// Format time as MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

// Update the display
function updateDisplay() {
  quarterDisplay.textContent = quarters[quarterIndex]
  timerDisplay.innerHTML = `${quarters[quarterIndex]} ${formatTime(time)}`
}

// Start/pause the timer
function toggleTimer() {
  if (isRunning) {
    clearInterval(timerInterval)
    timerButton.textContent = 'Start'
  } else {
    timerInterval = setInterval(() => {
      time++
      updateDisplay()

      // When time reaches 15 minutes (900 seconds), reset time and move to the next quarter
      if (time >= 15 * 60) {
        time = 0 // Reset time
        quarterIndex++ // Move to the next quarter

        // If it's the last quarter, stop the timer
        if (quarterIndex >= quarters.length) {
          clearInterval(timerInterval)
          timerButton.textContent = 'Start'
          isRunning = false
          return
        }
      }
    }, 1000 / 200) // Increment every second
    timerButton.textContent = 'Pause'
  }
  isRunning = !isRunning
}

// Add event listener to the button
timerButton.addEventListener('click', toggleTimer)

// Initial display setup
updateDisplay()
