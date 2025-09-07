"use client";

import { type ReactNode, useState, useEffect } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  icon,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0052FF] disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    primary:
      "bg-[var(--app-accent)] hover:bg-[var(--app-accent-hover)] text-[var(--app-background)]",
    secondary:
      "bg-[var(--app-gray)] hover:bg-[var(--app-gray-dark)] text-[var(--app-foreground)]",
    outline:
      "border border-[var(--app-accent)] hover:bg-[var(--app-accent-light)] text-[var(--app-accent)]",
    ghost:
      "hover:bg-[var(--app-accent-light)] text-[var(--app-foreground-muted)]",
  };

  const sizeClasses = {
    sm: "text-xs px-2.5 py-1.5 rounded-md",
    md: "text-sm px-4 py-2 rounded-lg",
    lg: "text-base px-6 py-3 rounded-lg",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="flex items-center mr-2">{icon}</span>}
      {children}
    </button>
  );
}

type CardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

function Card({
  title,
  children,
  className = "",
  onClick,
}: CardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`bg-[var(--app-card-bg)] backdrop-blur-md rounded-xl shadow-lg border border-[var(--app-card-border)] overflow-hidden transition-all hover:shadow-xl ${className} ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? "button" : undefined}
    >
      {title && (
        <div className="px-5 py-3 border-b border-[var(--app-card-border)]">
          <h3 className="text-lg font-medium text-[var(--app-foreground)]">
            {title}
          </h3>
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}

type FeaturesProps = {
  setActiveTab: (tab: string) => void;
};

export function Features({ setActiveTab }: FeaturesProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <Card title="Key Features">
        <ul className="space-y-3 mb-4">
          <li className="flex items-start">
            <Icon name="check" className="text-[var(--app-accent)] mt-1 mr-2" />
            <span className="text-[var(--app-foreground-muted)]">
              Minimalistic and beautiful UI design
            </span>
          </li>
          <li className="flex items-start">
            <Icon name="check" className="text-[var(--app-accent)] mt-1 mr-2" />
            <span className="text-[var(--app-foreground-muted)]">
              Responsive layout for all devices
            </span>
          </li>
          <li className="flex items-start">
            <Icon name="check" className="text-[var(--app-accent)] mt-1 mr-2" />
            <span className="text-[var(--app-foreground-muted)]">
              Dark mode support
            </span>
          </li>
          <li className="flex items-start">
            <Icon name="check" className="text-[var(--app-accent)] mt-1 mr-2" />
            <span className="text-[var(--app-foreground-muted)]">
              OnchainKit integration
            </span>
          </li>
        </ul>
        <Button variant="outline" onClick={() => setActiveTab("home")}>
          Back to Home
        </Button>
      </Card>
    </div>
  );
}

type HomeProps = {
  setActiveTab: (tab: string) => void;
};

export function Home({ setActiveTab }: HomeProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Icon name="zap" size="lg" className="text-[var(--app-accent)]" />
          <h1 className="text-4xl font-bold text-[var(--app-foreground)]">
            Tap Warz
          </h1>
          <Icon name="zap" size="lg" className="text-[var(--app-accent)]" />
        </div>

        <p className="text-xl text-[var(--app-foreground-muted)] max-w-md mx-auto">
          Challenge your friends in an epic tapping battle! See who can tap the fastest.
        </p>
      </div>

      <div className="w-full max-w-sm">
        <Button
          onClick={() => setActiveTab("game")}
          icon={<Icon name="target" size="sm" />}
          className="w-full py-4 text-lg font-semibold"
          size="lg"
        >
          Start Tapping War
        </Button>
      </div>
    </div>
  );
}

type IconProps = {
  name: "heart" | "star" | "check" | "plus" | "arrow-right" | "trophy" | "zap" | "target";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Icon({ name, size = "md", className = "" }: IconProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const icons = {
    heart: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <title>Heart</title>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    star: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <title>Star</title>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    check: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <title>Check</title>
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    plus: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <title>Plus</title>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
    "arrow-right": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <title>Arrow Right</title>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    ),
    trophy: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <title>Trophy</title>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55.47.98.97 1.21C11.56 18.75 12 19.38 12 20v2" />
        <path d="M14 14.66V17c0 .55-.47.98-.97 1.21C12.44 18.75 12 19.38 12 20v2" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
    zap: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <title>Zap</title>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    target: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <title>Target</title>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  };

  return (
    <span className={`inline-block ${sizeClasses[size]} ${className}`}>
      {icons[name]}
    </span>
  );
}

// Commented out unused Todo type
// type Todo = {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// Commented out unused TodoList component
// function TodoList() {
//   const [todos, setTodos] = useState<Todo[]>([
//     { id: 1, text: "Learn about MiniKit", completed: false },
//     { id: 2, text: "Build a Mini App", completed: true },
//     { id: 3, text: "Deploy to Base and go viral", completed: false },
//   ]);
//   const [newTodo, setNewTodo] = useState("");

//   const addTodo = () => {
//     if (newTodo.trim() === "") return;

//     const newId =
//       todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
//     setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
//     setNewTodo("");
//   };

//   const toggleTodo = (id: number) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo,
//       ),
//     );
//   };

//   const deleteTodo = (id: number) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       addTodo();
//     }
//   };

//   return (
//     <Card title="Get started">
//       <div className="space-y-4">
//         <div className="flex items-center space-x-2">
//           <input
//             type="text"
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder="Add a new task..."
//             className="flex-1 px-3 py-2 bg-[var(--app-card-bg)] border border-[var(--app-card-border)] rounded-lg text-[var(--app-foreground)] placeholder-[var(--app-foreground-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--app-accent)]"
//           />
//           <Button
//             variant="primary"
//             size="md"
//             onClick={addTodo}
//             icon={<Icon name="plus" size="sm" />}
//           >
//             Add
//           </Button>
//         </div>

//         <ul className="space-y-2">
//           {todos.map((todo) => (
//             <li key={todo.id} className="flex items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <button
//                   type="button"
//                   id={`todo-${todo.id}`}
//                   onClick={() => toggleTodo(todo.id)}
//                   className={`w-5 h-5 rounded-full border flex items-center justify-center ${
//                     todo.completed
//                       ? "bg-[var(--app-accent)] border-[var(--app-accent)]"
//                       : "border-[var(--app-foreground-muted)] bg-transparent"
//                   }`}
//                 >
//                   {todo.completed && (
//                     <Icon
//                       name="check"
//                       size="sm"
//                       className="text-[var(--app-background)]"
//                     />
//                   )}
//                 </button>
//                 <label
//                   htmlFor={`todo-${todo.id}`}
//                   className={`text-[var(--app-foreground-muted)] cursor-pointer ${todo.completed ? "line-through opacity-70" : ""}`}
//                 >
//                   {todo.text}
//                 </label>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => deleteTodo(todo.id)}
//                 className="text-[var(--app-foreground-muted)] hover:text-[var(--app-foreground)]"
//               >
//                 ×
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Card>
//   );
// }


// Commented out unused TransactionCard component
// function TransactionCard() {
//   const { address } = useAccount();

//   // Example transaction call - sending 0 ETH to self
//   const calls = useMemo(() => address
//     ? [
//         {
//           to: address,
//           data: "0x" as `0x${string}`,
//           value: BigInt(0),
//         },
//       ]
//     : [], [address]);

//   const sendNotification = useNotification();

//   const handleSuccess = useCallback(async (response: TransactionResponse) => {
//     const transactionHash = response.transactionReceipts[0].transactionHash;

//     console.log(`Transaction successful: ${transactionHash}`);

//     await sendNotification({
//       title: "Congratulations!",
//       body: `You sent your a transaction, ${transactionHash}!`,
//     });
//   }, [sendNotification]);

//   return (
//     <Card title="Make Your First Transaction">
//       <div className="space-y-4">
//         <p className="text-[var(--app-foreground-muted)] mb-4">
//           Experience the power of seamless sponsored transactions with{" "}
//           <a
//             href="https://onchainkit.xyz"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#0052FF] hover:underline"
//           >
//             OnchainKit
//           </a>
//           .
//         </p>

//         <div className="flex flex-col items-center">
//           {address ? (
//             <Transaction
//               calls={calls}
//               onSuccess={handleSuccess}
//               onError={(error: TransactionError) =>
//                 console.error("Transaction failed:", error)
//               }
//             >
//               <TransactionButton className="text-white text-md" />
//               <TransactionStatus>
//                 <TransactionStatusAction />
//                 <TransactionStatusLabel />
//               </TransactionStatus>
//               <TransactionToast className="mb-4">
//                 <TransactionToastIcon />
//                 <TransactionToastLabel />
//                 <TransactionToastAction />
//               </TransactionToast>
//             </Transaction>
//           ) : (
//             <p className="text-yellow-400 text-sm text-center mt-2">
//               Connect your wallet to send a transaction
//             </p>
//           )}
//         </div>
//       </div>
//     </Card>
//   );
// }

type GameState = "setup" | "playing" | "finished";

type Player = {
  id: number;
  name: string;
  taps: number;
  color: string;
};

type TappingWarProps = {
  setActiveTab: (tab: string) => void;
};

export function TappingWar({ setActiveTab }: TappingWarProps) {
  const [gameState, setGameState] = useState<GameState>("setup");
  const [players, setPlayers] = useState<Player[]>([
    { id: 1, name: "Player 1", taps: 0, color: "bg-blue-500" },
    { id: 2, name: "Player 2", taps: 0, color: "bg-red-500" },
  ]);
  const [gameTime, setGameTime] = useState(10); // seconds
  const [timeLeft, setTimeLeft] = useState(gameTime);
  const [winner, setWinner] = useState<Player | null>(null);

  const resetGame = () => {
    setPlayers(prev => prev.map(player => ({ ...player, taps: 0 })));
    setTimeLeft(gameTime);
    setWinner(null);
    setGameState("setup");
  };

  const startGame = () => {
    resetGame();
    setGameState("playing");
    setTimeLeft(gameTime);
  };

  const handleTap = (playerId: number) => {
    if (gameState !== "playing") return;

    setPlayers(prev =>
      prev.map(player =>
        player.id === playerId
          ? { ...player, taps: player.taps + 1 }
          : player
      )
    );
  };

  const updatePlayerName = (playerId: number, name: string) => {
    setPlayers(prev =>
      prev.map(player =>
        player.id === playerId
          ? { ...player, name }
          : player
      )
    );
  };

  // Game timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (gameState === "playing" && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameState("finished");
            // Determine winner
            const maxTaps = Math.max(...players.map(p => p.taps));
            const gameWinner = players.find(p => p.taps === maxTaps) || null;
            setWinner(gameWinner);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameState, timeLeft, players]);

  if (gameState === "setup") {
    return (
      <div className="space-y-6 animate-fade-in">
        <Card title="Tapping War - Setup">
          <div className="space-y-4">
            <p className="text-[var(--app-foreground-muted)] mb-4">
              Get ready for an epic tapping battle! Set up your players and game duration.
            </p>

            <div className="space-y-3">
              {players.map((player) => (
                <div key={player.id} className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${player.color}`}></div>
                  <input
                    type="text"
                    value={player.name}
                    onChange={(e) => updatePlayerName(player.id, e.target.value)}
                    className="flex-1 px-3 py-2 bg-[var(--app-card-bg)] border border-[var(--app-card-border)] rounded-lg text-[var(--app-foreground)] placeholder-[var(--app-foreground-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--app-accent)]"
                    placeholder={`Player ${player.id} name`}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <label className="text-[var(--app-foreground-muted)]">Game Duration:</label>
              <select
                value={gameTime}
                onChange={(e) => setGameTime(Number(e.target.value))}
                className="px-3 py-2 bg-[var(--app-card-bg)] border border-[var(--app-card-border)] rounded-lg text-[var(--app-foreground)] focus:outline-none focus:ring-1 focus:ring-[var(--app-accent)]"
              >
                <option value={5}>5 seconds</option>
                <option value={10}>10 seconds</option>
                <option value={15}>15 seconds</option>
                <option value={30}>30 seconds</option>
              </select>
            </div>

            <div className="flex space-x-3">
              <Button
                onClick={startGame}
                icon={<Icon name="zap" size="sm" />}
                className="flex-1"
              >
                Start Battle!
              </Button>
              <Button
                variant="outline"
                onClick={() => setActiveTab("home")}
                className="flex-1"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (gameState === "playing") {
    return (
      <div className="space-y-6 animate-fade-in">
        <Card title="Tapping War - Battle in Progress!">
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--app-accent)] mb-2">
                {timeLeft}
              </div>
              <p className="text-[var(--app-foreground-muted)]">seconds remaining</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {players.map((player) => (
                <div key={player.id} className="text-center">
                  <div className={`w-full h-32 ${player.color} rounded-lg flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-transform select-none`}
                       onClick={() => handleTap(player.id)}
                       onTouchStart={() => handleTap(player.id)}>
                    <Icon name="target" size="lg" className="text-white mb-2" />
                    <span className="text-white font-bold">TAP!</span>
                  </div>
                  <div className="mt-2">
                    <div className="font-semibold text-[var(--app-foreground)]">{player.name}</div>
                    <div className="text-2xl font-bold text-[var(--app-accent)]">{player.taps}</div>
                    <div className="text-sm text-[var(--app-foreground-muted)]">taps</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-[var(--app-foreground-muted)] text-sm">
                Tap your area as fast as you can!
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (gameState === "finished") {
    const maxTaps = Math.max(...players.map(p => p.taps));
    const isTie = players.filter(p => p.taps === maxTaps).length > 1;

    return (
      <div className="space-y-6 animate-fade-in">
        <Card title="Tapping War - Results">
          <div className="space-y-4">
            <div className="text-center">
              {isTie ? (
                <div>
                  <Icon name="star" size="lg" className="text-yellow-500 mx-auto mb-2" />
                  <h2 className="text-2xl font-bold text-[var(--app-foreground)] mb-2">
                    It&apos;s a Tie!
                  </h2>
                  <p className="text-[var(--app-foreground-muted)]">
                    Both players tapped {maxTaps} times!
                  </p>
                </div>
              ) : (
                <div>
                  <Icon name="trophy" size="lg" className="text-yellow-500 mx-auto mb-2" />
                  <h2 className="text-2xl font-bold text-[var(--app-foreground)] mb-2">
                    {winner?.name} Wins!
                  </h2>
                  <p className="text-[var(--app-foreground-muted)]">
                    With {winner?.taps} taps in {gameTime} seconds!
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-[var(--app-foreground)] text-center">Final Scores</h3>
              {players
                .sort((a, b) => b.taps - a.taps)
                .map((player, index) => (
                  <div key={player.id} className="flex items-center justify-between p-3 bg-[var(--app-card-bg)] rounded-lg border border-[var(--app-card-border)]">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${player.color}`}></div>
                      <span className="font-medium text-[var(--app-foreground)]">
                        {index === 0 && !isTie && <Icon name="trophy" size="sm" className="text-yellow-500 inline mr-1" />}
                        {player.name}
                      </span>
                    </div>
                    <div className="text-xl font-bold text-[var(--app-accent)]">
                      {player.taps}
                    </div>
                  </div>
                ))}
            </div>

            <div className="flex space-x-3">
              <Button
                onClick={startGame}
                icon={<Icon name="zap" size="sm" />}
                className="flex-1"
              >
                Play Again
              </Button>
              <Button
                variant="outline"
                onClick={() => setActiveTab("home")}
                className="flex-1"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return null;
}
