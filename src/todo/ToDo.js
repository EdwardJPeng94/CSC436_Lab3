export default function ToDo({ title, content, author, time, dispatch, user }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
      <br />
      Created on <b> {time}</b>
      <br />
    </div>
  );
}
