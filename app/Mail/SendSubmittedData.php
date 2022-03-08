<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;

class SendSubmittedData extends Mailable
{
    /** @var array $data */
    protected $data;

    /**
     * Create a new message instance.
     *
     * @param $data
     */
    public function __construct ( $data )
    {
        $this -> data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build ()
    {
        return $this -> from ( "example@example.com" )
            -> markdown ( 'emails.submitted' )
            -> with ( [
                'submittedData' => $this -> data
            ] );
    }
}
