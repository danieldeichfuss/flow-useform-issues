"use client";

import {
  Action,
  ActionGroup,
  Button,
  Content,
  Heading,
  Label,
  Modal,
  Text,
  useOverlayController,
  SegmentedControl,
  Segment,
} from "@mittwald/flow-react-components";
import { useForm } from "react-hook-form";
import {
  Form,
  typedField,
} from "@mittwald/flow-react-components/react-hook-form";

export default function TestFormModal() {
  const controller = useOverlayController("Modal");

  const form = useForm<{ test: string }>({
    defaultValues: {
      test: "default-value",
    },
  });

  const Field = typedField(form);

  const handleOnSubmit = async () => {
    // submit form
    controller.close();
    form.reset();
  };

  const watchedName = form.watch("test");

  return (
    <>
    <div>
      <Text>{watchedName}</Text>
      <Button onPress={controller.open}>
        Modal öffnen
      </Button>
      </div>
      <Modal controller={controller}>
        <Form form={form} onSubmit={handleOnSubmit}>
          <Heading>Test Segmented Control</Heading>

          <Content>
            <Field name="test">
          <SegmentedControl>
  <Label>Authentifizierungsart</Label>
  <Segment value="test 1">test 1</Segment>
  <Segment value="test 2">test 2</Segment>
  <Segment value="test 3">test 3</Segment>
  <Segment value="test 4">test 4</Segment>
  <Segment value="default-value">test 5</Segment>
</SegmentedControl>
</Field>
          </Content>

          <ActionGroup>
            <Button color="accent" type="submit">
              Speichern
            </Button>
            <Action closeOverlay="Modal">
              <Button color="secondary" variant="soft">
                Abbrechen
              </Button>
            </Action>
          </ActionGroup>
        </Form>
      </Modal>
    </>
  );
}
