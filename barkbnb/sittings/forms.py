from django.forms import ModelForm
from .models import Dog, Sitting, Offer

class DogForm(ModelForm):
    class Meta:
        model = Dog
        fields = ['name', 'size']

    def __init__(self, *args, **kwargs):
        super(DogForm, self).__init__(*args, **kwargs)

class SittingForm(ModelForm):
    class Meta:
        model = Sitting
        fields = ['location', 'start_date', 'end_date']

    def __init__(self, *args, **kwargs):
        super(SittingForm, self).__init__(*args, **kwargs)