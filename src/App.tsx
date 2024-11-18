import { useRef } from "react";
import Button from "./components/Button";
import { Card } from "./components/Card";
import Container from "./components/Container";
import { IconButton } from "./components/IconButton";
import Input from "./components/Input";
import { List } from "./components/List";
import Form, { type FormHandle } from "./components/Form";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const customFormRef = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    // tyoe casting approach
    const extractedData = data as {
      name: string;
      age: string;
    };

    // another approach = type narrowing
    //  if (!data || typeof data !== "object" || !("name" in data) || !("age" in data)) {
    //    return;
    //  }

    console.log(extractedData);
    customFormRef.current?.clear();
  }

  return (
    <>
      <h1>Let's get started!</h1>

      <Form onSave={handleSave} ref={customFormRef}>
        <Input label="Your name" id="name" type="text" ref={inputRef} />
        <Input label="Your age" id="age" type="number" />
        <Button el="button">SUBMIT</Button>
      </Form>

      <Container as={"button"} onClick={() => console.log("Clicked!")}>
        Click me!
      </Container>
      <Button el="button">HI</Button>
      <Button el="anchor" href="https://www.google.pl/?hl=pl">
        GOOGLE
      </Button>
      <IconButton icon={HeartIcon} onClick={() => console.log("Button clicked!")}>
        Like
      </IconButton>
      <section>
        <h2>Users</h2>
        <List items={users} renderItem={(user) => <li key={user.id}>{user.name}</li>} />
      </section>
      <section>
        <h2>Hobbies</h2>
        <List items={hobbies} renderItem={(hobby) => <li key={hobby}>{hobby}</li>} />
      </section>
      <Card
        title="My Card"
        actions={<button onClick={() => console.log("Button clicked!")}>Click Me!</button>}
      >
        <p>Some content</p>
      </Card>
    </>
  );
}

function HeartIcon() {
  return <span>❤️</span>;
}

const users = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" }
];

const hobbies = ["Sports", "Reading", "Cooking"];

export default App;
