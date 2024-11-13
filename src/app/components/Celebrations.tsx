
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const Celebrations = ({ trigger }: { trigger: boolean }) => {
  const [isConfettiVisible, setIsConfettiVisible] = useState(trigger);

  useEffect(() => {
    setIsConfettiVisible(trigger);
  }, [trigger]);

  return (
    <>
      {isConfettiVisible && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}  
          numberOfPieces={500}
          gravity={0.1}
          colors={['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']} 
        />
      )}
    </>
  );
};

export default Celebrations;
