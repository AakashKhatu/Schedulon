from django.urls import path
from ui.views import landing_page

urlpatterns = [
    path('', landing_page.as_view(), name='landing_page'),
]
