import { useState } from "react";
import css from "./Component/App.module.css";
import type { VoteType, Votes } from "./types/votes";
import CafeInfo from "./components/CafeInfo.tsx";
import VoteOption from "./components/VoteOptions.tsx";
import VoteStats from "./components/VoteStats.tsx";
import Notification from "./components/Notification.tsx";
export default function App() {
   const [votes, setVotes] = useState<Votes>({ good: 0, bad: 0, neutral: 0 });
   const handleVote = (type: VoteType) => {
      setVotes({
         ...votes,
         [type]: votes[type] + 1,
      });
   };
   const resetVotes = () => {
      setVotes({
         good: 0,
         bad: 0,
         neutral: 0,
      });
   };
   const totalVotes: number = votes.good + votes.neutral + votes.bad;
   const positiveRate: number = totalVotes
      ? Math.round((votes.good / totalVotes) * 100)
      : 0;
   const canReset = totalVotes > 0;
   return (
      <div className={css.app}>
         <CafeInfo />
         <VoteOption
            resetVotes={resetVotes}
            handleVote={handleVote}
            canReset={canReset}
         />
         {totalVotes > 0 ? (
            <VoteStats
               positiveRate={positiveRate}
               totalVotes={totalVotes}
               votes={votes}
            />
         ) : (
            <Notification />
         )}
      </div>
   );
}
