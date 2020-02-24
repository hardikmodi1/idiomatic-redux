import React from "react";
import Button from "../atoms/Button";

interface Props {
  toggleFilter: (filter: string) => void;
  filter: string;
  active: boolean;
}

function FilterButton(props: Props) {
  const { filter, active } = props;
  const onClick = () => props.toggleFilter(filter);
  return <Button active={active} label={filter} onClick={onClick} />;
}

export default React.memo(FilterButton);
