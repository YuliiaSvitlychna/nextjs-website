type PropsType = {
  page: number;
};

export default async function Pager(props: PropsType) {
  const { page } = props;
  return (
    <div>
      {page}
      [1], [2], [3] ...
    </div>
  );
}
