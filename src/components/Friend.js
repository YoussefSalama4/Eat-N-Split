import Button from "./Button";
export default function Friend({
  friend,
  onSelectFriend,
  selectedFriend,
  onDeleteFriend,
}) {
  const isSelected = friend.id === selectedFriend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance === 0 && <p>{friend.name} and you are even</p>}
      <div className="friend-buttons">
        <Button onClick={() => onSelectFriend(friend)}>
          {isSelected ? "close" : "select"}
        </Button>
        <Button onClick={() => onDeleteFriend(friend)}>Delete</Button>
      </div>
    </li>
  );
}
