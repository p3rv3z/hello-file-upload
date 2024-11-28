/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import app from '@adonisjs/core/services/app'

router.on('/').render('pages/home')

router.post('/file-upload', async ({ request, response }) => {
  const avatar = request.file('avatar', {
    size: '2mb',
    extnames: ['jpg', 'png', 'jpeg'],
  })

  if (avatar) {
    await avatar.move(app.makePath('storage/uploads'))
  } else {
    return response.status(400).json({ message: 'Avatar is required' })
  }

  return response.json({ message: 'File uploaded successfully' })
})
