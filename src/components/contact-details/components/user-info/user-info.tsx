interface ElementProps {
  firstName: string | string[];
  lastName: string | string[];
  owner: string | string[];
}

const UserInfo = ({ firstName, lastName, owner }: ElementProps) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
        <span className="text-sm font-semibold text-white">
          {typeof firstName === "string" ? firstName.charAt(0) : ""}
          {typeof lastName === "string" ? lastName.charAt(0) : ""}
        </span>
      </div>

      <div className="flex-1">
        <h2 className="text-sm font-semibold text-gray-900">
          {firstName} {lastName}
        </h2>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-gray-500">Owner</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-100 rounded-full p-2.5 flex items-center justify-center">
              <span className="text-xs font-medium text-blue-600">
                {typeof owner === "string"
                  ? owner
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                  : ""}
              </span>
            </div>

            <span className="text-xs text-gray-700">{owner}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
