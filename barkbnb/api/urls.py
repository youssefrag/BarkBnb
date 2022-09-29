from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('sittings', views.getSittings, name='get-sittings'),
    path('users/create', views.registerUser, name='register-user'),
    path('users/logout', views.logoutUser, name='logout-user'),
    path('users/login', views.loginUser, name='login-user'),
    path('profile-edit/<str:email>', views.editAccount),
    path('profiles', views.getProfiles),
    path('dogs/<str:email>', views.getDogs),
    path('new-dog/<str:email>', views.createDogProfile),
    path('new-sitting/<str:dogName>', views.createSitting),
    path('make-offer/<str:email>', views.makeOffer),
]