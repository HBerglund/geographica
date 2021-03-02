import ResultView from "./ResultView";

interface Props {
  showResult: boolean;
  searchValue: string;
}

function ViewContainer(props: Props) {
  if (props.showResult) {
    return <ResultView searchValue={props.searchValue} />;
  } else {
    return null;
  }
}

export default ViewContainer;
