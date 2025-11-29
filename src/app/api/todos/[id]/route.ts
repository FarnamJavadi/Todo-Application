import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(
  request: NextRequest,
  props: { params: { id: string } }
) {
  try {
    const requestBody = await request.json()
    const todoId = props.params.id
    
    await new Promise(function(resolve) {
      setTimeout(function() {
        resolve(null)
      }, 100)
    })
    
    const responseData = {
      success: true,
      id: todoId,
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

export async function DELETE(
  request: NextRequest,
  props: { params: { id: string } }
) {
  try {
    const todoId = props.params.id
    
    await new Promise(function(resolve) {
      setTimeout(function() {
        resolve(null)
      }, 100)
    })
    
    const responseData = {
      success: true,
      id: todoId
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

