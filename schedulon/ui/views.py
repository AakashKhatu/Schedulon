from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.
class landing_page(TemplateView):

    template_loc = "index.html"

    def get(self, request):
        return render(request, self.template_loc)
