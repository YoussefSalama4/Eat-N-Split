import Button from "./Button";
import { useState } from "react";
export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paid, setPaid] = useState("");
  const paidByFriend = bill ? bill - paid : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paid) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paid);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💲 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => {
          if (isNaN(e.target.value)) {
            return;
          }
          setBill(Number(e.target.value));
        }}
      ></input>

      <label>🙎‍♂️Your expense</label>
      <input
        type="text"
        value={paid}
        onChange={(e) => {
          if (isNaN(e.target.value)) return;
          setPaid(
            Number(e.target.value) > bill ? paid : Number(e.target.value)
          );
        }}
      ></input>

      <label>👩🏻‍🤝‍👩🏻{selectedFriend.name}'s expense</label>
      <input disabled type="text" value={paidByFriend}></input>
      <label>🤑who will pay the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
