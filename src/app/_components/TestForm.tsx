"use client";

import { useForm } from "react-hook-form";
import {
  Field,
  Form,
} from "@mittwald/flow-react-components/react-hook-form";
import {
  ActionGroup,
  Button,
  FieldDescription,
  Label,
  Section,
  Text,
  TextField,
} from "@mittwald/flow-react-components";

export default function TestForm() {
  interface Values {
    name: string;
  }
  const form = useForm<Values>({
    defaultValues: {
      name: "This is the default value",
    },
  });

  const handleOnSubmit = (values: Values) => {
    alert(JSON.stringify(values));
    form.reset();
  };

  const watchedName = form.watch("name");

  return (
    <Form form={form} onSubmit={handleOnSubmit}>
      <Section>
        <Text>{watchedName}</Text>
        <Field
          name="name"
          rules={{
            required: "The project name is required",
          }}
        >
          <TextField>
            <Label>Name</Label>
            <FieldDescription>
              The name of the project
            </FieldDescription>
          </TextField>
        </Field>
        <ActionGroup>
          <Button type="submit">Save</Button>
        </ActionGroup>
      </Section>
    </Form>
  );
}
