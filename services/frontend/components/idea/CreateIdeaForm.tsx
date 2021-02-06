import {
  Textarea,
  Text,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

export default function CreateIdeaForm() {
  let [value, setValue] = React.useState("");

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <div>
      <FormControl id="email">
        <FormLabel>Title:</FormLabel>
        <Input type="text" />
        <FormHelperText></FormHelperText>
        <Text mb="8px">Value: {value}</Text>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="Here is a sample placeholder"
          size="sm"
        />
      </FormControl>
    </div>
  );
}
