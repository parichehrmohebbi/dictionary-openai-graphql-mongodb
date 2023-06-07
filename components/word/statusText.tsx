import React from "react";

interface StatusTextProps {
  message: String;
}
const StatusText: React.FC<StatusTextProps> = ({
  message,
}: StatusTextProps) => {
  return <p className="py-5 font-bold">{message}</p>;
};

export default StatusText;
