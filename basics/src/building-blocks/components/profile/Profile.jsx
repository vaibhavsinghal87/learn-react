import Avatar from "../avatar/Avatar";
import Card from "../card/Card";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <Card>
        <Avatar
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
      </Card>
      <Card>
        <Avatar
          size={80}
          person={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
      </Card>
      <Card>
        <Avatar
          size={50}
          person={{
            name: "Lin Lanying",
            imageId: "1bX5QH6",
          }}
        />
      </Card>
    </div>
  );
}
