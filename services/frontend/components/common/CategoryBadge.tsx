import { Badge, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  name: string;
  color: string;
  selected?: boolean;
}

export default function CategoryBadge({ name, color, selected }: Props) {
  return (
    <Badge
      bgColor={selected ? "white" : color}
      color={selected ? "brand.prim" : "brand.font.prim"}
      borderRadius="20px"
      padding="5px"
      border={selected ? "1px" : ""}
      _hover={{
        backgroundColor: "white",
        color: "brand.prim",
        transition: "ease-in 0.3s",
        cursor: "pointer",
      }}
    >
      <Text fontSize="9px">{name}</Text>
    </Badge>
  );
}
