from django.forms import ModelForm
from .models import Dog

class DogForm(ModelForm):
    class Meta:
        model = Dog
        fields = ['name', 'size']

    def __init__(self, *args, **kwargs):
        super(DogForm, self).__init__(*args, **kwargs)