interface ElementProps {
  tags: string[];
}

const UserTags = ({ tags }: ElementProps) => {
  return (
    <>
      <div className="text-xs text-gray-500 mb-2">Tags</div>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
};

export default UserTags;
