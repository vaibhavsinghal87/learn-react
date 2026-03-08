import Gallery from "./components/gallery/Gallery";
import Form from "./components/image-gallery/Form";
import ImageGallery from "./components/image-gallery/ImageGallery";
import PackingList from "./components/packing-list/PackingList";
import People from "./components/people/People";

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
    </>
  );
}
