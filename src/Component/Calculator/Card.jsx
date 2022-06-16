import React, { useState } from "react";
import "./Card.css";

function Card(props) {
	// item[0] = billing input, item[1] = custom tip, item[2] = number of people, item[3] = tip amount, item[4] = total amount, item[5] = value of tip, item[6] = reset boolean, item[7] = condition number of people
	const [item, setItem] = useState(["", "", "", "0.00", "0.00", 0, true, "none"]);
	let tempValue;
	let tipAmount, totalAmount


	// function that handles the bill and calculates the values
	function handleBillChange(event) {
		let billInput = event.target.value;
		if (item[0] != null && item[5] != null && item[2] > 0) {
			tipAmount = Math.round((billInput * item[5]) / (item[2])) / 100;
			totalAmount = Math.round(((item[0] / item[2] + tipAmount)) * 100) / 100;
		}

		setItem([billInput, item[1], item[2], tipAmount, totalAmount, item[5], false, item[7]]);
	}

	// Function to handle tip and calculate its value
	function handleTip(event) {
		let customTip = item[1];
		if (event.target.name === "custom") {
			tempValue = event.target.value;
			customTip = tempValue;
		}
		else
			tempValue = event.target.name;
		if (item[0] != null && tempValue != null && item[2] > 0) {
			tipAmount = Math.round((item[0] * tempValue) / (item[2])) / 100;
			totalAmount = Math.round(((item[0] / item[2] + tipAmount)) * 100) / 100;
		}
		setItem([item[0], customTip, item[2], tipAmount, totalAmount, tempValue, false, item[7]]);
	}

	// Function to handle tip and calculate its value
	function handlePeopleChange(event) {
		let numOfPeople = event.target.value
		if (numOfPeople === "0")
			item[7] = "";
		else if (numOfPeople !== "0")
			item[7] = "none";
		if (item[0] != null && item[5] != null && numOfPeople > 0) {
			tipAmount = Math.round((item[0] * item[5]) / (numOfPeople)) / 100;
			totalAmount = Math.round(((item[0] / numOfPeople + tipAmount)) * 100) / 100;
		}
		setItem([item[0], item[1], numOfPeople, tipAmount, totalAmount, item[5], false, item[7]]);
	}

	// Function to handle reseting the values
	function handleReset() {
		setItem(["", "", "", "0.00", "0.00", 0, true, "none"]);
	}

	return (
		<div className="calculator">
			<div className="inputSection">
				<label>Bill</label>
				<input type='number' className="bill-input" id="bill-inp" placeholder="0" value={item[0]} onChange={handleBillChange}></input>
				<label>Select Tip %</label>
				<div className="tip">
					<button name={5} value="5%" onClick={handleTip} className="tip-option"><span>5%</span></button>
					<button name={10} value="10%" onClick={handleTip} className="tip-option"><span>10%</span></button>
					<button name={15} value="15%" onClick={handleTip} className="tip-option"><span>15%</span></button>
					<button name={25} value="25%" onClick={handleTip} className="tip-option"><span>25%</span></button>
					<button name={50} value="50%" onClick={handleTip} className="tip-option"><span>50%</span></button>
					<input name="custom" type="number" className="tip-custom" placeholder="Custom" value={item[1]} onChange={handleTip} ></input>

				</div>
				<div className="peopleSection">
					<label>Number of People</label>
					<label style={{ display: item[7] }} className="error">Can't be zero</label>
				</div>
				<input type="number" className="people-input" placeholder="0" value={item[2]} onChange={handlePeopleChange}></input>



			</div>
			<div className="outputSection">
				<div className="tip-amount">
					<div className="text">
						<p>Tip Amount</p>
						<p className="divided-person">/ person</p>
					</div>
					<div className="amount" id="tip-sum">${item[3]}</div>
				</div>
				<div className="total-amount">
					<div className="text">
						<p>Total</p>
						<p className="divided-person">/ person</p>
					</div>
					<div className="amount" id="total-sum"><p>${item[4]}</p></div>
				</div>
				<button className="resetSection" disabled={item[6]} onClick={handleReset}>RESET</button>
			</div>
		</div>
	);
}



export default Card;
