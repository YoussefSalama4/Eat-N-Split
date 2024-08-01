import Friend from "./Friend";
export default function FriendsList({
  friends,
  onSelectFriend,
  selectedFriend,
  onDeleteFriend,
}) {
  return (
    <ul>
      {friends.map((el) => (
        <Friend
          friend={el}
          key={el.id}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
          onDeleteFriend={onDeleteFriend}
        />
      ))}
    </ul>
  );
}
