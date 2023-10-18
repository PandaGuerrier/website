import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "Domains/users/models/User";
import UserValidator from "Apps/web/validators/UserValidator";

export default class UserController {
  public async create ({ view }: HttpContextContract): Promise<string>{
    return view.render('web::views/authentication/create_user')
  }

  public async store ({ request, response, auth, session, i18n }: HttpContextContract) {
    const data = await request.validate(UserValidator)

    const user = await User.create(data)
    try {
      await auth.use('web').attempt(user.email, data.password)
      response.redirect('/')
    } catch {
      session.flash('error', i18n.formatMessage('authentication.errors.bad_credentials'))
      return response.redirect().back()
    }
  }
}
