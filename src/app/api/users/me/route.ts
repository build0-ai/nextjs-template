import { authenticate } from "@build0.ai/core";
import { NextRequest, NextResponse } from "next/server";
import { GetUserMeResponse } from "@/types/api";

/**
 * GET /api/users/me
 * Returns the authenticated user's profile information
 */
export async function GET(req: NextRequest) {
  try {
    const { user } = await authenticate(req);

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        image: user.profilePictureUrl,
      },
    } satisfies GetUserMeResponse);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
