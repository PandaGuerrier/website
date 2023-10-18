import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
  public async home ({ view }: HttpContextContract): Promise<string>{
    return view.render('web::views/home')
  }
}

/*
    const emailSettings = await new DefaultEmailSettings().get()
    const email = new AccountLogin(
      emailSettings,
      "A connexion has been made to your account",
      request.ip()
    )

    await email.send()
 */
