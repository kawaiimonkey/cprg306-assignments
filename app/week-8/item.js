export default function Item({ item, onSelect }) {
  const { name, quantity, category } = item;
  
  return (
    <ul
      className="bg-slate-800 my-4 p-2 w-96 cursor-pointer hover:bg-slate-700"
      onClick={() => onSelect(item)}
    >
      <li className="font-bold text-2xl">{name}</li>
      <li className="text-lg">
        Buy {quantity} in {category}
      </li>
    </ul>
  );
}