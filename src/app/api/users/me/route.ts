import { getTokenData } from "@/utils/getTokenData";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConnect/dbconnect";

connect();

export async function POST(request:NextRequest){

    try {
        const userId = await getTokenData(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}