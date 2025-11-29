import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json()
    
    await new Promise(function(resolve) {
      setTimeout(function() {
        resolve(null)
      }, 100)
    })
    
    const responseData = {
      success: true,
      data: requestBody
    }
    
    return NextResponse.json(responseData, { status: 200 })
  } catch (error) {
    const errorResponse = {
      success: false,
      error: 'Invalid request'
    }
    return NextResponse.json(errorResponse, { status: 400 })
  }
}

export async function GET() {
  const responseData = {
    todos: []
  }
  return NextResponse.json(responseData, { status: 200 })
}

