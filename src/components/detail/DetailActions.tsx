import { PlayIcon } from "@/assets/icons";
import Button from "@/components/common/Button";

const DetailActions = () => {
  return (
    <div className="flex items-center justify-center pt-3">
      <Button className="w-75.5" icon={<PlayIcon className="h-4 w-3.5" />}>
        Play
      </Button>
    </div>
  );
};

export default DetailActions;
