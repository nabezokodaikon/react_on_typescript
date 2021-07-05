import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IListItemProps {
  value: number;
}

interface INumberListProps {
  numbers: Array<number>;
}

function ListItem(props: IListItemProps) {
  const value = props.value;
  return (
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props: INumberListProps) {
  const numbers = props.numbers;
  // const listItems = numbers.map((number) =>
    // <ListItem key={number.toString()} value={number} />
  // );
  // return (
    // <ul>{listItems}</ul>
  // );
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number}/>
      )}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);

interface IPostProps {
  id: number;
  title: string;
  content: string;
}

interface IBlogProps {
  posts: IPostProps[];
}

function Blog(props: IBlogProps) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  return (
    <>
      {sidebar}
      <hr />
      {content}
    </>
  );
}

const posts: IPostProps[] = [
  {id: 1, title: "Hello World", content: "Welcome to learning React!"},
  {id: 2, title: "Installation", content: "You can install React from npm."}
]

// ReactDOM.render(
  // <Blog posts={posts} />,
  // document.getElementById("root")
// );
