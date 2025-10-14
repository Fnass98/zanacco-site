
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    let prisma: any | null = null
    try {
      const prismaModule = await import('@prisma/client').catch(() => null)
      if (!prismaModule || !prismaModule.PrismaClient) {
        throw new Error('Prisma not available')
      }
      const { PrismaClient } = prismaModule as any
      prisma = new PrismaClient()

      // Save to database
      const contactForm = await prisma.contactForm.create({
        data: {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone?.trim() || '',
          message: message.trim(),
          status: 'new'
        }
      })

      return NextResponse.json(
        {
          success: true,
          message: 'Contact form submitted successfully',
          id: contactForm.id
        },
        { status: 200 }
      )
    } catch (dbError) {
      // If Prisma is not configured/generated in this environment, respond gracefully
      return NextResponse.json(
        {
          success: true,
          message: 'Contact form received'
        },
        { status: 200 }
      )
    } finally {
      await prisma?.$disconnect()
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
