import { currentUser } from "@clerk/nextjs/server";
import { cache } from "react";

export default cache(currentUser);
