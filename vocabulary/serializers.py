from rest_framework import serializers
from .models import VocabularyWord

class VocabularySerializer(serializers.ModelSerializer):
    class Meta:
        model = VocabularyWord
        fields = '__all__'
