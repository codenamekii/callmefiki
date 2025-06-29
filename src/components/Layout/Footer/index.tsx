import Typography from "../../Typography";
import LiveClock from "./LiveClock";

export default function Footer() {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 hidden sm:flex items-center justify-between">
      <div className="flex flex-col items-start">
        <Typography.Small isScrambled className="text-green-primary">
          Makassar, South of Celebes - Indonesia
        </Typography.Small>
        <div className="flex flex-row gap-1">
          <Typography.Small isScrambled className="text-green-primary">
            UTC+8
          </Typography.Small>
          <Typography.Small className="text-green-primary">-</Typography.Small>
          <Typography.Small isScrambled className="text-green-primary">
            <LiveClock />
          </Typography.Small>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <Typography.Small isScrambled className="text-green-primary">
          Callmefiki Version
        </Typography.Small>
        <Typography.Small isScrambled className="text-green-primary">
          {process.env.NEXT_PUBLIC_VERSION!}
        </Typography.Small>
      </div>
    </div>
  );
}
