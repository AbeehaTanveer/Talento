import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiAward, FiHelpCircle, FiRefreshCw, FiShare2, FiArrowLeft } from 'react-icons/fi';

const RiddleWordGame = () => {
  const riddles = [
    { id: 1, question: "I'm tall when I'm young and short when I'm old. What am I?", answer: "CANDLE", difficulty: "easy" },
    { id: 2, question: "What has keys but can't open locks?", answer: "PIANO", difficulty: "easy" },
    { id: 3, question: "What gets wet while drying?", answer: "TOWEL", difficulty: "medium" },
    { id: 4, question: "What has a head, a tail, but no body?", answer: "COINS", difficulty: "medium" },
    { id: 5, question: "The more you take, the more you leave behind. What am I?", answer: "STEPS", difficulty: "hard" }
  ];

  const [currentRiddle, setCurrentRiddle] = useState(0);
  const [guesses, setGuesses] = useState(Array(5).fill(''));
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState('playing'); 
  const [usedClue, setUsedClue] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180);
  const [showClue, setShowClue] = useState(false);
  const [eliminatedLetters, setEliminatedLetters] = useState(new Set());
  const [leaderboard, setLeaderboard] = useState([
    { name: 'WordMaster', time: 47, clues: 0 },
    { name: 'RiddleSolver', time: 82, clues: 1 },
    { name: 'PuzzleExpert', time: 112, clues: 0 },
    { name: 'BrainTeaser', time: 145, clues: 2 },
    { name: 'You', time: 0, clues: 0, isCurrent: true }
  ]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    setCurrentRiddle(randomIndex);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameStatus('lost');
      return;
    }
    if (gameStatus === 'playing') {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft, gameStatus]);

  useEffect(() => {
    // Update eliminated letters when guesses change
    const newEliminated = new Set(eliminatedLetters);
    guesses.forEach(guess => {
      if (guess) {
        guess.split('').forEach((letter, index) => {
          if (!riddles[currentRiddle].answer.includes(letter)) {
            newEliminated.add(letter);
          }
        });
      }
    });
    setEliminatedLetters(newEliminated);
  }, [guesses]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameStatus !== 'playing') return;
      if (e.key === 'Enter') {
        if (currentGuess.length === 5) {
          const newGuesses = [...guesses];
          newGuesses[guesses.findIndex(val => val === '')] = currentGuess;
          setGuesses(newGuesses);
          setCurrentGuess('');
          if (currentGuess === riddles[currentRiddle].answer) {
            setGameStatus('won');
            const newLeaderboard = [...leaderboard];
            newLeaderboard[4] = { 
              ...newLeaderboard[4], 
              time: 180 - timeLeft, 
              clues: usedClue ? 1 : 0 
            };
            setLeaderboard(newLeaderboard.sort((a, b) => a.time - b.time));
          } else if (newGuesses[4] !== '') {
            setGameStatus('lost');
          }
        }
      } else if (e.key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0, -1));
      } else if (/^[A-Za-z]$/.test(e.key) && currentGuess.length < 5) {
        setCurrentGuess(currentGuess + e.key.toUpperCase());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, gameStatus, guesses, currentRiddle, timeLeft, usedClue, leaderboard]);

  const handleClue = () => {
    if (usedClue) return;
    setUsedClue(true);
    setShowClue(true);
    setTimeout(() => setShowClue(false), 3000);
  };

  const restartGame = () => {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    setCurrentRiddle(randomIndex);
    setGuesses(Array(5).fill(''));
    setCurrentGuess('');
    setGameStatus('playing');
    setTimeLeft(180);
    setUsedClue(false);
    setEliminatedLetters(new Set());
  };

  const getCluePosition = () => Math.floor(Math.random() * 5);

  const shareResults = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Riddle Word Game',
        text: `I solved the riddle "${riddles[currentRiddle].question}" in ${180 - timeLeft} seconds with ${usedClue ? 'a clue' : 'no clues'}! Try it yourself.`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`I solved the riddle "${riddles[currentRiddle].question}" in ${180 - timeLeft} seconds with ${usedClue ? 'a clue' : 'no clues'}! Try it yourself at ${window.location.href}`);
      alert('Results copied to clipboard!');
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };


  // Alphabet for eliminated letters display
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

return (
  <div className="min-h-screen w-full bg-gradient-to-br from-[#F5F5F5] to-[#FFF6E5] flex flex-col py-8 px-4">
    {/* Header */}
    <div className="w-full flex justify-between items-center mb-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.history.back()}
        className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full text-sm font-medium"
      >
        <FiArrowLeft className="mr-2" />
        Back
      </motion.button>
      
      <motion.header 
        className="text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF6F61] to-[#006D77] bg-clip-text text-transparent mb-2">
          Riddle Word
        </h1>
        <p className="text-gray-600">Solve the riddle by guessing the word!</p>
      </motion.header>
      
      <div className="w-20"></div> {/* Spacer for balance */}
    </div>

    {/* Game Container */}
    <div className="w-full flex flex-col lg:flex-row gap-8 flex-1">
      {/* Left Column - Game Board */}
      <div className="flex-1">
        {/* Riddle Display */}
        <motion.div 
          className="bg-white rounded-2xl p-6 shadow-lg mb-6 text-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-2">
            <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
            <p className="text-sm text-gray-500">Live</p>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {riddles[currentRiddle].question}
          </h2>
          
          {/* Timer and Clue Section */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center text-gray-700">
              <FiClock className="mr-2" />
              <span className="font-mono">{formatTime(timeLeft)}</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClue}
              disabled={usedClue}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                usedClue 
                  ? 'bg-gray-200 text-gray-500' 
                  : 'bg-[#FF6F61] text-white hover:bg-[#e55d50]'
              }`}
            >
              <FiHelpCircle className="mr-2" />
              {usedClue ? 'Clue Used' : 'Get a Clue'}
            </motion.button>
          </div>
        </motion.div>

        {/* Clue Reveal */}
        <AnimatePresence>
          {showClue && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-yellow-100 border border-yellow-300 rounded-xl p-4 mb-6 text-center w-full"
            >
              <p className="text-yellow-800 font-medium">
                Letter {getCluePosition() + 1} is "{riddles[currentRiddle].answer[getCluePosition()]}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Eliminated Letters */}
        {eliminatedLetters.size > 0 && (
          <motion.div 
            className="bg-white rounded-2xl p-4 shadow-lg mb-6 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-sm font-medium text-gray-500 mb-2 text-center">Eliminated Letters</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {alphabet.map(letter => (
                <div
                  key={letter}
                  className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium ${
                    eliminatedLetters.has(letter)
                      ? 'bg-red-100 text-red-800 line-through'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {letter}
                </div>
              ))}
            </div>
          </motion.div>
        )}

  {/* Word Display - Full Width */}
<div className="bg-white rounded-2xl p-6 shadow-lg w-full mb-6">
  <div className="flex flex-col gap-6 w-full">
    {guesses.map((guess, rowIndex) => (
      guess && (
        <motion.div 
          key={rowIndex}
          className="flex justify-between w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: rowIndex * 0.1 }}
        >
          {guess.split('').map((letter, colIndex) => {
            const isCorrect = riddles[currentRiddle].answer[colIndex] === letter;
            const isPresent = riddles[currentRiddle].answer.includes(letter) && !isCorrect;

            return (
              <span
                key={colIndex}
                className={`text-2xl font-bold p-2 text-center flex-1
                  ${isCorrect ? 'text-[#1fae0f]' : 
                    isPresent ? 'text-[#d2ed4f]' : 
                    'text-gray-400 line-through'}`}
              >
                {letter}
              </span>
            );
          })}
        </motion.div>
      )
    ))}
    
    {/* Current guess */}
    {gameStatus === 'playing' && (
      <div className="flex gap-2 justify-between w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="text-2xl font-bold p-2 text-center border-b-2 border-[#FF6F61] flex-1"
          >
            {currentGuess[index] || ''}
          </span>
        ))}
      </div>
    )}
  </div>
</div>

        {/* Game Status */}
        {gameStatus !== 'playing' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4 bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className={`text-2xl font-bold mb-2 ${gameStatus === 'won' ? 'text-green-600' : 'text-red-600'}`}>
              {gameStatus === 'won' ? 'Congratulations! 🎉' : 'Time\'s Up! ⏰'}
            </h3>
            <p className="text-gray-700 mb-4">
              {gameStatus === 'won' 
                ? `You solved it in ${formatTime(180 - timeLeft)} with ${usedClue ? 'a clue' : 'no clues'}!` 
                : `The answer was: ${riddles[currentRiddle].answer}`}
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={restartGame}
                className="flex items-center px-4 py-2 bg-[#006D77] hover:bg-[#005a63] text-white rounded-full text-sm font-medium"
              >
                <FiRefreshCw className="mr-2" />
                Play Again
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={shareResults}
                className="flex items-center px-4 py-2 bg-[#FF6F61] hover:bg-[#e55d50] text-white rounded-full text-sm font-medium"
              >
                <FiShare2 className="mr-2" />
                Share
              </motion.button>
            </div>
          </motion.div>
        )}

        {gameStatus === 'playing' && (
          <div className="text-center text-sm text-gray-500 mt-4">
            <p>Type your guess and press Enter to submit</p>
          </div>
        )}
      </div>

      {/* Right Column - Leaderboard */}
      <div className="flex-1 w-full">
        <motion.div 
          className="bg-white rounded-2xl p-6 shadow-lg w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <FiAward className="text-yellow-500 text-xl mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Leaderboard</h2>
          </div>
          
          <div className="space-y-3">
            {leaderboard.map((player, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between p-3 rounded-xl ${
                  player.isCurrent 
                    ? 'bg-blue-50 border border-blue-200' 
                    : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm mr-3 ${
                    index === 0 ? 'bg-yellow-500' : 
                    index === 1 ? 'bg-gray-400' : 
                    index === 2 ? 'bg-yellow-700' : 'bg-gray-500'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`font-medium ${player.isCurrent ? 'text-blue-600' : 'text-gray-800'}`}>
                    {player.name}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-700">{player.time}s</div>
                  <div className="text-xs text-gray-500">{player.clues} clue{player.clues !== 1 ? 's' : ''}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Solve faster and use fewer clues to climb the ranks!
            </p>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Footer */}
    <motion.footer 
      className="mt-8 text-center text-gray-500 text-sm w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <p>Made with ❤️ for word puzzle enthusiasts</p>
    </motion.footer>
  </div>
);

};

export default RiddleWordGame;