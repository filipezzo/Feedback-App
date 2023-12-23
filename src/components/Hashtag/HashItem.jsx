import Button from "../Button";

function HashItem({ company, onFilteringList }) {
  return (
    <li className="first-letter:uppercase">
      <Button onClick={() => onFilteringList(company)} variant>
        #{company}
      </Button>
    </li>
  );
}

export default HashItem;
