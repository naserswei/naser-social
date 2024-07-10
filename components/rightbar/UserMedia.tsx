import Image from "next/image";

function UserMedia() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-4 w-full text-sm">
      <div className="flex justify-between items-center">
        <h1 className=" text-gray-500">User Media</h1>
        <p className=" text-blue-500">See all</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className=" relative h-24 w-16">
          <Image
            className="rounded-md object-cover"
            src="https://images.pexels.com/photos/26125407/pexels-photo-26125407/free-photo-of-a-gray-butterfly-sitting-on-a-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="media"
          />
        </div>

        <div className=" relative h-24 w-16">
          <Image
            className="rounded-md object-cover"
            src="https://images.pexels.com/photos/26125407/pexels-photo-26125407/free-photo-of-a-gray-butterfly-sitting-on-a-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="media"
          />
        </div>

        <div className=" relative h-24 w-16">
          <Image
            className="rounded-md object-cover"
            src="https://images.pexels.com/photos/26125407/pexels-photo-26125407/free-photo-of-a-gray-butterfly-sitting-on-a-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="media"
          />
        </div>

        <div className=" relative h-24 w-16">
          <Image
            className="rounded-md object-cover"
            src="https://images.pexels.com/photos/26125407/pexels-photo-26125407/free-photo-of-a-gray-butterfly-sitting-on-a-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="media"
          />
        </div>

        <div className=" relative h-24 w-16">
          <Image
            className="rounded-md object-cover"
            src="https://images.pexels.com/photos/26125407/pexels-photo-26125407/free-photo-of-a-gray-butterfly-sitting-on-a-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="media"
          />
        </div>
      </div>
    </div>
  );
}

export default UserMedia;
