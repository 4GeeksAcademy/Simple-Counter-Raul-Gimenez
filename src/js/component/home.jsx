import React, {useEffect, useState} from "react";
import BgCounter from "./BgCounter.jsx";
import CounterCard from "./CounterCard.jsx";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0);
	const [color, setColor] = useState(true)

	setTimeout(() => setCount(count + 1), 1000);
	setTimeout(() => setColor(!color),500)

	
	const seconds = count.toString();
	const borderColor = () => {let borderColor
		color ? borderColor = "warning" : borderColor = "warning-subtle"
		return borderColor
	};
	

	return (
		<BgCounter bgColor = "dark" borderColor={borderColor()}>
			<CounterCard borderColor={borderColor()}>
				<i class={`fa-regular fa-clock`}></i>
			</CounterCard>
			<CounterCard borderColor={borderColor()}>
				{seconds[seconds.length-6] || "0"}
			</CounterCard>
			<CounterCard borderColor={borderColor()}>
				{seconds[seconds.length-5] || "0"}
			</CounterCard>
			<CounterCard borderColor={borderColor()}>
			 {seconds[seconds.length-4] || "0"}
			</CounterCard>
			<CounterCard borderColor={borderColor()}>
				{seconds[seconds.length-3] || "0"}
			</CounterCard>
			<CounterCard borderColor={borderColor()}>
				{seconds[seconds.length-2] || "0"}
			</CounterCard>
			<CounterCard borderColor={borderColor()}>
				{seconds[seconds.length-1] || "0"}
			</CounterCard>
		</BgCounter>
		)
};

export default Home;
