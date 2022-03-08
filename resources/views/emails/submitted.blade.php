@component('mail::message')
# Submitted data

@component('mail::table')
| Name              | Color              |
| :---------------- |:------------------ |
@foreach($submittedData as $data)
| {{ $data['name'] }} | {{ $data['color'] }} |
@endforeach
@endcomponent

@endcomponent
