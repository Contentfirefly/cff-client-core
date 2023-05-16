export abstract class FireflyProps<ContentType = any, ClientType = any> {
  content?: ContentType;
  editMode?: boolean;
  client?: ClientType;
}
