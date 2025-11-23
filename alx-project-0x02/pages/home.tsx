import Card from "../components/common/Card";
// "@/components/common/Card"

<>
<Card title="First Card" content="This is card one." />
<Card title="Second Card" content="This is card two." />

const [posts, setPosts] = useState([]);
const [open, setOpen] = useState(false);

<PostModal
  onClose={() => setOpen(false)}
  onSubmit={(data) => {
    setPosts([...posts, data]);
    setOpen(false);
  }}
/>

<button onClick={() => setOpen(true)}>Open Modal</button>

</>

import Header from "@/components/layout/Header";
<Header />


