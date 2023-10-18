import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from "Apps/web/validators/authentication/LoginValidator";

export default class AuthenticationController {
  public async showLogin ({ view }: HttpContextContract): Promise<string>{
    return view.render('web::views/authentication/login')
  }

  public async login ({ request, response, auth, session }: HttpContextContract) {
    const { email, password } = await request.validate(LoginValidator)

    try {
      await auth.use('web').attempt(email, password)

      session.flash('toast', {
        type: 'success',
        message: "You're logged in!"
      })

      response.redirect('/')
    } catch (error) {
       session.flash('toast', {
        type: 'warning',
        message: "Unkown user or wrong password!"
      })

      return response.redirect().back()
    }
  }

  public async logout ({ response, auth, session }: HttpContextContract) {
    await auth.logout()

    session.flash('toast', {
      type: 'success',
      message: "You're logged out!"
    })

    return response.redirect().back()
  }
}
