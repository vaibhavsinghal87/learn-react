import Gallery from "./components/gallery/Gallery";
import Form from "./components/image-gallery/Form";
import ImageGallery from "./components/image-gallery/ImageGallery";
import Lazy from "./components/lazy/Lazy";
import App from "./components/lifting-state-up/App";
import PackingList from "./components/packing-list/PackingList";
import People from "./components/people/People";
import Array from "./components/update-array-in-state/Array";
import UseRef from "./components/use-ref/UseRef";

export default function ReactConcepts() {
  return (
    <>
      <Gallery />
      <PackingList />
      <People />
      <hr />
      <ImageGallery />
      <hr />
      <Form />
      <hr />
      <App />
      <hr />
      <Array />
      <hr />
      <UseRef />
      <hr />
      <Lazy />
      <hr />
    </>
  );
}
