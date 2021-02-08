import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import React from "react";

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ handleChange }: Props) {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input type="text" borderColor="gray.300" onChange={handleChange} />
    </InputGroup>
  );
}
