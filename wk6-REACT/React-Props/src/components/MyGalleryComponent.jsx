import MyImageComponent from "./MyImageComponent";

export default function MyGalleryComponent() {
  return (
    <div id="img">
      <MyImageComponent
        imageUrl="https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-sunlight.jpg"
        altText="An absolutely adorable kitten"
      />
      <MyImageComponent
        imageUrl="https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/19253/105536/heroimage0.788077001549899933.jpg"
        altText="An absolutely adorable kitten"
      />
      <MyImageComponent
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Red_Kitten_01.jpg/1280px-Red_Kitten_01.jpg"
        altText="An absolutely adorable kitten"
      />
    </div>
  );
}
